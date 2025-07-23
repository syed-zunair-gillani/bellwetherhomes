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
        {
          subLinks: [
            { text: 'Cottage Lap/Dutch', href: '/cottage-lap-siding' },
            { text: 'Shingle/Shake', href: '/shingle-shake' },
            { text: 'Nickel Gap/Ship', href: '/nickel-gap-siding' }
          ]
        },
        { text: 'Natural Wood Siding', href: '/natural-wood-siding' },
        { text: 'Specialty Wood Siding', href: '/specialty-wood-siding' },
        { text: 'Board & Batten Siding', href: '/board-and-batten' },
        { text: 'Cottage Lap/Dutch Lap Siding', href: '/cottage-lap-siding' },
        { text: 'Shingle/Shake', href: '/shingle-shake' },
        { text: 'Nickel Gap/Ship Lap', href: '/nickel-gap-siding' },
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
        {
          subLinks: [
            { text: 'Cottage Lap/Dutch', href: '/cottage-lap-siding' },
            { text: 'Shingle/Shake', href: '/shingle-shake' },
            { text: 'Nickel Gap/Ship', href: '/nickel-gap-siding' }
          ]
        },
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
    <footer className="bg-[#EF4F36] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-lg mb-7 border-b pb-5">{footerData.companyInfo.title}</h3>
          <ul className="space-y-1">
            {footerData.companyInfo.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                  {link.text}
                </Link>
                <ul>
                  {
                    link?.subLinks?.map((item, idx) => (
                      <li key={idx} className="!list-disc list-inside">
                        <Link href={item.href || "#"} className="hover:text-gray-300 list-disc text-[#FFFAE3]">
                          {item.text}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Exterior Siding */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-lg mb-7 border-b pb-5">{footerData.exteriorSiding.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            {/* First Half */}
            <ul className="space-y-1">
              {footerData.exteriorSiding.links.slice(0, Math.ceil(footerData.exteriorSiding.links.length / 2)).map((link, index) => (
                <li key={index}>
                  <Link href={link.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                    {link.text}
                  </Link>
                  <ul>
                    {link?.subLinks?.map((item, idx) => (
                      <li key={idx} className="!list-disc list-inside">
                        <Link href={item.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* Second Half */}
            <ul className="space-y-1">
              {footerData.exteriorSiding.links.slice(Math.ceil(footerData.exteriorSiding.links.length / 2)).map((link, index) => (
                <li key={index}>
                  <Link href={link.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                    {link.text}
                  </Link>
                  <ul>
                    {link?.subLinks?.map((item, idx) => (
                      <li key={idx} className="!list-disc list-inside">
                        <Link href={item.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Windows */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-lg mb-7 border-b pb-5">{footerData.windows.title}</h3>
          <ul className="space-y-1">
            {footerData.windows.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                  {link.text}
                </Link>
                <ul>
                  {
                    link?.subLinks?.map((item, idx) => (
                      <li key={idx} className="!list-disc list-inside">
                        <Link href={item.href || "#"} className="hover:text-gray-300 list-disc text-[#FFFAE3]">
                          {item.text}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Entry Doors */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-lg mb-7 border-b pb-5">{footerData.entryDoors.title}</h3>
          <ul className="space-y-1">
            {footerData.entryDoors.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href || "#"} className="hover:text-gray-300 text-[#FFFAE3]">
                  {link.text}
                </Link>
                <ul>
                  {
                    link?.subLinks?.map((item, idx) => (
                      <li key={idx} className="!list-disc list-inside">
                        <Link href={item.href || "#"} className="hover:text-gray-300 list-disc text-[#FFFAE3]">
                          {item.text}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        {/* Service Areas */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-lg mb-7 border-b pb-5">{footerData.serviceAreas.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            {/* First Half */}
            <ul className="space-y-1">
              {footerData.serviceAreas.areas.slice(0, Math.ceil(footerData.serviceAreas.areas.length / 2)).map((area, index) => (
                <li key={index}>
                  <Link
                    href={`/service-areas/${area.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="hover:text-gray-300 text-[#FFFAE3]"
                  >
                    {area}
                  </Link>
                  <ul>
                    {
                      area?.subLinks?.map((item, idx) => (
                        <li key={idx} className="!list-disc list-inside">
                          <Link href={item.href || "#"} className="hover:text-gray-300 list-disc text-[#FFFAE3]">
                            {item.text}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))}
            </ul>

            {/* Second Half */}
            <ul className="space-y-1">
              {footerData.serviceAreas.areas.slice(Math.ceil(footerData.serviceAreas.areas.length / 2)).map((area, index) => (
                <li key={index}>
                  <Link
                    href={`/service-areas/${area.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="hover:text-gray-300 text-[#FFFAE3]"
                  >
                    {area}
                  </Link>
                  {
                    area?.subLinks?.map((item, idx) => (
                      <li key={idx} className="!list-disc list-inside">
                        <Link href={item.href || "#"} className="hover:text-gray-300 list-disc text-[#FFFAE3]">
                          {item.text}
                        </Link>
                      </li>
                    ))
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterTop