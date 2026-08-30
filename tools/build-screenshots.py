"""Regenerate src/public/app/*.webp from the captured app screenshots.

    python tools/build-screenshots.py

Sources live outside this repository, in `screenshots/` at the workspace root:
the phone shots come off a Pixel 10 at 1080x2424, the dashboard off a browser at
1440x900. Only Pillow is needed.

Two rules are worth keeping when the app changes and these are recaptured:

* Phone screenshots are never cropped. The page draws the bezel in CSS, and a
  bezel around a cropped screen is a phone shape no phone has — which is exactly
  what it looks like. Recapture the screen rather than trimming the file.
* `offer-card` is the exception, and is deliberately not presented as a device:
  it is a card lifted out of the offers screen and floated over the hero phone
  as a callout, framed as a card.
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SHOTS = ROOT.parent / "screenshots" / "landing"
OUT = ROOT / "src" / "public" / "app"

PHONE_SIZE = (1080, 2424)
PHONE_WIDTH = 620
DASHBOARD_WIDTH = 1440

# (source, output name, crop box or None, target width)
JOBS = [
    (SHOTS / "01-map.png", "map", None, PHONE_WIDTH),
    (SHOTS / "02-new-request.png", "step-when", None, PHONE_WIDTH),
    (SHOTS / "03-request-offers.png", "step-answers", None, PHONE_WIDTH),
    (SHOTS / "04-place-detail.png", "step-book", None, PHONE_WIDTH),
    (SHOTS / "03-request-offers.png", "offer-card", (56, 1307, 1024, 1737), 760),
    (
        ROOT.parent / "screenshots" / "verify" / "host" / "03-requests.png",
        "host-inbox",
        None,
        DASHBOARD_WIDTH,
    ),
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    for source, name, box, width in JOBS:
        image = Image.open(source).convert("RGB")

        if box:
            image = image.crop(box)
        elif image.size != PHONE_SIZE and width == PHONE_WIDTH:
            raise SystemExit(
                f"{source.name} is {image.size}, not a whole {PHONE_SIZE} phone "
                "screen — recapture it rather than cropping it to fit."
            )

        height = round(image.height * width / image.width)
        target = OUT / f"{name}.webp"
        image.resize((width, height), Image.LANCZOS).save(
            target, "WEBP", quality=80, method=6
        )
        print(f"{target.name:18} {width}x{height:<6} {target.stat().st_size / 1024:6.1f} kB")


if __name__ == "__main__":
    main()
