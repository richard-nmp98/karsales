import Head from 'next/head';
import { memo } from 'react';
import { FB_PIXEL_ID } from 'src/helpers/fpixel';
import { GA_TRACKING_ID } from 'src/helpers/ga';
import { GTAG_TRACKING_ID } from 'src/helpers/gtag';

const HeaderTracking = memo(({ children }: any) => {
	return (
		<Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{/* <script async defer src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_TRACKING_ID}`} /> */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
              setTimeout(function(){
                (function (d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = 'https://www.googletagmanager.com/gtag/js?id=${GTAG_TRACKING_ID}';
                  fjs.parentNode.insertBefore(js, fjs);
                })(document, 'script', 'gtag-jssdk');                
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            gtag('event', 'conversion', {
              send_to: 'AW-603585656/k9mwCKX9jN8BEPj4558C'
            })
          },3000)
          `,
				}}
			/>

			<script
				dangerouslySetInnerHTML={{
					__html: `
              setTimeout(function(){
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', '${GA_TRACKING_ID}', 'auto');
                ga('send', 'pageview');
              },3000)
                `,
				}}
			></script>

			{/* Global Site Code Pixel - Facebook Pixel */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
              setTimeout(function(){
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
                fbq('track', 'PageView');
                },3000)
              `,
				}}
			/>
			{children}
		</Head>
	);
});

export default HeaderTracking;
