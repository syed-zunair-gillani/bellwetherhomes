import Link from 'next/link'

const FooterTop = () => {
  const footerData = {
    companyInfo: {
      title: 'Company Info',
      links: [
        { text: 'About Us', href: '/about-us' },
        { text: 'Our Team', href: '/our-team' },
        { text: 'Careers', href: '/careers' },
        { text: 'Testimonials', href: '/testimonials' },
        { text: 'Blog', href: '/blog' },
        { text: 'Project Portfolio', href: '/portfolio' },
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'Employment', href: '/employment' },
        { text: 'Financing', href: '/financing' },
        { text: 'Service Area', href: '/service-area' },
        { text: 'Free Design Guide', href: '/design-guide' },
        { text: 'FAQs', href: '/faqs' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Referral Rewards', href: '/referral-rewards' },
        { text: 'Privacy Policy', href: '/privacy-policy' }
      ]
    },
    exteriorSiding: {
      title: 'Exterior Siding',
      links: [
        { text: 'Wood Siding', href: '/wood-siding' },
        { text: 'Cedar Shake', href: '/cedar-shake' },
        { text: 'Composite Siding', href: '/composite-siding' },
        { text: 'Natural Wood Siding', href: '/natural-wood-siding' },
        { text: 'Specialty Wood Siding', href: '/specialty-wood-siding' },
        { text: 'Board & Batten Siding', href: '/board-and-batten' },
        { text: 'Cottage Lap/Dutch Lap Siding', href: '/cottage-lap-siding' },
        { text: 'Shingle/Shake', href: '/shingle-shake' },
        { text: 'Nickel Gap/Ship Lap', href: '/nickel-gap-siding' }
      ]
    },
    fiberCementSiding: {
      title: 'Fiber Cement Siding',
      links: [
        { text: 'Siding Panels', href: '/siding-panels' },
        { text: 'Woodtone Siding', href: '/woodtone-siding' },
        { text: 'Vinyl Siding', href: '/vinyl-siding' },
        { text: 'Weather Barrier', href: '/weather-barrier' },
        { text: 'Stucco Removal', href: '/stucco-removal' },
        { text: 'Insulation', href: '/insulation' },
        { text: 'Siding Replacement', href: '/siding-replacement' },
        { text: 'Fascia and Eaves', href: '/fascia-eaves' },
        { text: 'Multi-family Siding Replacement', href: '/multi-family-siding' }
      ]
    },
    windows: {
      title: 'Windows',
      links: [
        { text: 'Window Replacement', href: '/window-replacement' },
        { text: 'Window Styles', href: '/window-styles' },
        { text: 'Wood Windows', href: '/wood-windows' },
        { text: 'Fiberglass Windows', href: '/fiberglass-windows' },
        { text: 'Vinyl Windows', href: '/vinyl-windows' },
        { text: 'Window Brands', href: '/window-brands' },
        { text: 'Pella Platinum Certified Contractor', href: '/pella-certified' }
      ]
    },
    entryDoors: {
      title: 'Entry Doors',
      links: [
        { text: 'Entry Doors', href: '/entry-doors' },
        { text: 'Wood', href: '/wood-doors' },
        { text: 'Fiberglass', href: '/fiberglass-doors' },
        { text: 'Steel', href: '/steel-doors' },
        { text: 'Door Brands', href: '/door-brands' },
        { text: 'ProVia', href: '/provia-doors' }
      ]
    },
    serviceAreas: {
      title: 'Service Areas',
      areas: [
        'Arvada', 'Aurora', 'Boulder', 'Breckenridge', 'Broomfield', 'Castle Rock',
        'Centennial', 'Cheyenne, Wyoming', 'Colorado Springs', 'Conifer, Pine, and Bailey',
        'Denver', 'Fort Collins', 'Frisco', 'Golden', 'Grand County', 'Greeley',
        'Highlands Ranch', 'Lafayette', 'Lakewood', 'Littleton', 'Longmont', 'Louisville',
        'Loveland', 'Morrison', 'Northern Colorado', 'Parker', 'Summit County', 'Superior',
        'Westminster'
      ]
    }
  }

  return (
    <footer className="bg-red-600 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4">{footerData.companyInfo.title}</h3>
          <ul className="space-y-2">
            {footerData.companyInfo.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Exterior Siding */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4">{footerData.exteriorSiding.title}</h3>
          <ul className="space-y-2">
            {footerData.exteriorSiding.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fiber Cement Siding */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4">{footerData.fiberCementSiding.title}</h3>
          <ul className="space-y-2">
            {footerData.fiberCementSiding.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Windows */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4">{footerData.windows.title}</h3>
          <ul className="space-y-2">
            {footerData.windows.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Entry Doors */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4">{footerData.entryDoors.title}</h3>
          <ul className="space-y-2">
            {footerData.entryDoors.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4">{footerData.serviceAreas.title}</h3>
          <ul className="space-y-2">
            {footerData.serviceAreas.areas.map((area, index) => (
              <li key={index}>
                <Link href={`/service-areas/${area.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:underline">
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterTop