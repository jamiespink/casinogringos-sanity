import Image from 'next/image'
import Link from 'next/link'
import { Menu, MenuItem, Post } from '@/src/types'

interface IconProps {
  className?: string
}

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Casinogringos',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/casinogringos/',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/CasinoGringos',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Twitch',
      href: 'https://www.twitch.tv/casinogringos',
      icon: (props: IconProps) => (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCeFbFMkDfTlLayuZmk_aXiA',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const Footer = ({
  menu,
  sites,
  posts,
}: {
  menu: Menu['menuItems']
  sites: Menu['menuItems']
  posts: { edges: { node: Post }[] }
}) => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:px-8">
        <div>
          <div className="gap-6md:gap-6 mt-8 md:grid md:grid-cols-4 lg:mt-12">
            <div>
              <span className="text-xl font-semibold leading-6 text-white">
                Sidlänkar
              </span>
              <ul role="list" className="mt-6 space-y-4">
                {menu?.edges.map(({ node }: { node: MenuItem }) => (
                  <li key={`menu-item-label-${node.label}`}>
                    <Link
                      href={node.uri}
                      prefetch={false}
                      className="text-sm leading-6 text-gray300 hover:text-white"
                    >
                      {node.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <span className="text-xl font-semibold leading-6 text-white">
                Populära casinosidor
              </span>
              <ul role="list" className="mt-6 space-y-4">
                {sites?.edges.map(({ node }: { node: MenuItem }) => (
                  <li key={`site-${node.label}`}>
                    <Link
                      href={node.uri}
                      prefetch={false}
                      className="text-sm leading-6 text-gray300 hover:text-white"
                    >
                      {node.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <span className="text-xl font-semibold leading-6 text-white">
                Senaste recensionerna
              </span>
              <ul role="list" className="mt-6 space-y-4">
                {posts?.edges.map(({ node }: { node: Post }) => (
                  <li key={`post-${node.title}`}>
                    <Link
                      href={node.uri}
                      prefetch={false}
                      className="text-sm leading-6 text-gray300 hover:text-white"
                    >
                      {node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <span className="mb-5 block text-xl font-semibold leading-6 text-white">
                Kontaktuppgifter
              </span>
              <div className="mb-2 text-sm leading-6 text-lightBlue">
                Flamingo Media Limited
                <br />
                International House
                <br />
                Mdina Road, Mriehel
                <br />
                BKR 3000
                <br />
                Malta
              </div>
              <Link
                className="text-sm text-primary"
                target="_blank"
                href="mailto:contact@casinogringos.se"
              >
                Skicka E-post
              </Link>
              <Link
                href="https://se.trustpilot.com/review/casinogringos.se"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Casinogringos på Trustpilot"
              >
                <Image
                  className="mt-6"
                  src="/trustpilot.svg"
                  width={110}
                  height={50}
                  alt="Casinogringos betyg på Trustpilot"
                />
              </Link>
              <Link
                className="mt-6 block"
                aria-label="CO2 neutral webbsida"
                rel="nofollow noopener noreferrer"
                href="https://www.co2neutralwebsite.com/certificate/5839/sv"
                target="_blank"
              >
                <Image
                  src="/co2neutral.svg"
                  alt="CO2Neutral certifikat för Casinogringos"
                  width="140"
                  height="70"
                />
              </Link>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 border-t border-white/10 pt-8 lg:mt-12">
            <Link
              href="https://www.spelinspektionen.se/"
              title="Spelinspektionen.se"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Image
                className="brightnessinvert"
                src="/spelinspektionen.png"
                width={50}
                height={50}
                alt="Spelinspektionen"
              />
            </Link>
            <Link
              href="https://stodlinjen.se/"
              title="Stödlinjen.se"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Image
                src="/stodlinjen.png"
                width={150}
                height={50}
                alt="Stödlinjen.se"
              />
            </Link>
            <Image
              src="/18plus-logo.webp"
              width={30}
              height={30}
              alt="18+ spela ansvarsfullt"
            />
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 py-8 lg:pt-12">
          <p className="text-center text-sm leading-6 text-gray300">
            Casinogringos.se är en oberoende jämförelsesida för casinon på nätet
            som ägs av Flamingo Media Limited, ett bolag baserat på Malta med
            organisationsnummer C93014. Informationen på sidan är ämnad för
            underhållning och utbildning. Bonusar och erbjudanden kan ändras
            eller avbrytas av tredje part och Casinogringos kan därför inte
            hållas ansvarig för eventuellt felaktig information. De erbjudanden
            du hittar på sidan gäller enbart för personer över 18 år som är
            bosatta i Sverige.
          </p>
        </div>
        <div className="mt-4 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-4 md:order-2 lg:justify-normal">
            {navigation.social.map((item) => (
              <Link
                rel="nofollow noopener noreferrer"
                target="_blank"
                key={`social-${item.name}`}
                href={item.href}
                className="text-gray500 hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-5 text-gray400 md:order-1 md:mt-0 lg:text-left">
            &copy; 2019-{year} Casinogringos, Alla rättigheter reserverade.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
