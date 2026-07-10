import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Wavytalk-Professional-Diffuser-Temperature-Technology/dp/B0C5R836QJ?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=bf6bb003eba3a59f209d910ecba6d225&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Revlon-Compact-Lightweight-Design-Perfect/dp/B003TQPRGY?&linkCode=ll2&tag=strandtoolkit-20&linkId=2f5d4ae84a0a66c7779a02df671df8c6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Slopehill-Professional-Powerful-Concentrator-Attachments/dp/B0C3M9WBQF?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=665ae74fedb9cefe37eba1ba792391c2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Diffuser-Advanced-Technology-Ceramic-Features/dp/B0DMWNRM4X?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=fc958251452d9d5a5ce74f2ebabcca88&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Conair-InfinitiPRO-Motor-Hair-Dryer/dp/B07TT9XH98?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=9a7c0ed45d8aca656dde7189c4f90923&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Conair-Retractable-Concentrator-Attachments-Tourmaline/dp/B0G26XGNWQ?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=e69b698e6d52a102999decc111660aa6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Shark-Professional-Performance-High-Velocity-Lightweight/dp/B0DDYDWVD1?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=37cd6be76924dfd2814b73ef52d038ef&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/REVLON-One-Step-Dryer-Volumizer-Brush/dp/B096SVJZSW?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=92dcaf59f308f60d4c99323b627840e2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wavytalk-Thermal-Negative-Ceramic-Tourmaline/dp/B0CQSNXLJR?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=daaa2c28f072eabe2dfaec20455f1d54&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TYMO-Volumizer-Titanium-Straightener-Frizz-Free/dp/B08VWF7R91?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=c889e40d51ec65c4b723f71d3cd6b6b0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TYMO-Hair-Blow-Dryer-Brush/dp/B0G4W45B2J?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=33466039a03f5de5ddce056d549054b0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wavytalk-Thermal-Blowout-Detachable-Voltage/dp/B0CKTDHSRB?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=c513070f474826cbabac52bb5c372404&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wavytalk-Hair-Dryer-Brush-Blow/dp/B0D7HGNMZ1?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=6f13131b1aadfd09ea4f78f8cde05506&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/REMINGTON-Shine-Therapy-Argan-Keratin-Infused-Inch-Hair-Straightener/dp/B09RTLFV3F?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=08fd55e60300379e8f0b6fee02308f1d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TYMO-Straightener-Straighteners-Straightening-Anti-Frizz/dp/B0FJDK6BMT?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=3ae29fe5a241b91c810936304da6961c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hair-Straightener-Brush-Straightening-Anti-Scald/dp/B07MMQ4BZH?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=36fb7f37975e316022f50749c6faa79d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Straightener-Nourishes-Expedites-Straightening-Detachable/dp/B0FVXPLCKX?&linkCode=ll2&tag=strandtoolkit-20&linkId=59f2bad90f8d82f2b38b4b636d02d6e8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Straightener-Professional-Negative-320%E2%84%89-450%E2%84%89-110-240V/dp/B0CXPRMNWF?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=52cc43f0635f085dcfc4b942f413bc44&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BaBylissPRO-Nano-Titanium-Flat-Straightener/dp/B0F4MHYKSZ?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=a2a8fe1cb0fe48dc139920d370586a52&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Revlon-Fast-Results-Ceramic-Flat/dp/B07G7L2GDV?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=80d580beadb3b448daefd622e085cfe5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Conair-Double-Ceramic-Curling-2-inch/dp/B07CKFVX5L?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=c287462fa551986a25e1b14a77e92981&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TYMO-Automatic-Rotating-Curling-Iron/dp/B0DBZS6MHK?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=0e55078c5d0bc76288599f655780f564&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Upgraded-Automatic-Rotating-Curling-Iron/dp/B0DPZLWX8J?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=ad04eedf2a9d4f15577de3ed901af46c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Crimper-Curling-TYMO-Tourmaline-Anti-Scald/dp/B0C2ZGQ15W?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=f34aced79239bc942f75dcce2acbb210&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Extended-Moisture-Technology-NanoIonic-Versatile/dp/B01J248HWM?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=68bd9629a2e91bf790d25c09a4d0c56c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wavytalk-Crimper-Ventilation-Effortless-Waver-Crimping/dp/B0FWBH9ZF9?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=ca2291d0d5fff1a53a0fb84fbc520170&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HOT-TOOLS-Professional-Technology-Long-Lasting/dp/B0CW7GNR56?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=e358b0dcbe89fbcd6b5434ffe5308aa1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Norelco-Self-Sharpening-Settings-MG3939-50/dp/B0FHXXY3MD?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=57b2bc23184d4184f59eef5d0ccd2378&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wahl-Clipper-Rechargeable-Professionals-9649/dp/B01N0993NM?&linkCode=ll2&tag=strandtoolkit-20&linkId=f7125291b67b9ca9f56e8e431b55cdb5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Professional-Hair-Clippers-Trimmer-Kit/dp/B0963152JN?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=e86b5c0abb03745ed2bacc2071c231df&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wahl-Clipper-Lithium-Cordless-79470/dp/B09XLX656Z?&linkCode=ll2&tag=strandtoolkit-20&linkId=ff6c69a11bfe16a2970a53d5d431386a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Clipper-Color-Complete-Haircutting-Coded/dp/B00006IVEN?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=c9413de1e06b416d08f7ff66762eccb4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wahl-Rechargeable-Haircutting-Snap-N-Lock-Attachment/dp/B0GF9VJ2NW?&linkCode=ll2&tag=strandtoolkit-20&linkId=3dc4dff75fb58d0b4b452927808cb609&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Jack-Rose-Clippers-Professional-Cordless/dp/B0BRSMLFK9?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=19c65ecbd50dbacb33a0ffee82dbe7cd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wet-Brush-Original-Detangler-IntelliFlex/dp/B09RG8Q3C3?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=45e3c374eec4ab4e677ebe91432bec21&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Tangle-Teezer-Detangler-Millennial-Pink/dp/B07D395945?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=bf881815ce8d821c04dc447b598bc68e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FHI-Heat-UnBrush-Pink/dp/B07Z7PWZ7X?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=156da190d0f4710b33c38e237ee2fdc1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wet-Brush-Speed-Hair-Aqua/dp/B0B75KFXHP?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=e608a0420df4f566213a9fafd836f719&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Crave-Naturals-Glide-Detangling-Adults/dp/B015VEB9AO?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=f4d15d11c3cc9fab0b55bafc73170be6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bounce-Curl-EdgeLift-Effortlessly-Defined/dp/B0DF88V52N?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=992624574717d934ebfdb848dd46e4f0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/AIMIKE-Thermal-Ceramic-Bristles-Styling/dp/B082WVW7PH?th=1&linkCode=ll2&tag=strandtoolkit-20&linkId=bdab281740e536e1d9522dc44ff69cf2&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'strakit'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

