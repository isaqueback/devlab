import Script from 'next/script'

export function Ad() {
  return (
    <div className="animate__animated animate__fadeInUp justify-cente flex h-[90px] w-full max-w-[728px] items-center text-background">
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.pId}`}
        crossOrigin="anonymous"
      ></Script>
      {/* dev-lab.tech/converter */}
      <ins
        className="adsbygoogle block h-full w-full"
        data-ad-client={`ca-pub-${process.env.pId}`}
        data-ad-slot="2882291891"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="google-adsense">
        (adsbygoogle = window.adsbygoogle || []).push({})
      </Script>
    </div>
  )
}
