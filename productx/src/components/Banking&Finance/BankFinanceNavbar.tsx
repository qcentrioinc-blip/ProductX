const BankFinanceNavbar = () => {

  const NavLinks = [
    {id: 'products', text: 'Products'},
    {id: 'benefits', text: 'Benefits'},
    { id: 'who-is-it-for', text: 'Who is it for' },
    { id: 'use-cases', text: 'Use Cases' },
    { id: 'our-process', text: 'Our Process' },
    { id: 'blogs', text: 'Blogs' },
  ];

  const handleSmoothScroll = (e: any) => {
    // 1. Prevent the default jump-to-section behavior
    e.preventDefault();
    
    // 2. Get the target section's ID from the href
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // 3. If the element exists, scroll to it smoothly
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <ul className="flex justify-center items-center space-x-10">
        {NavLinks.map((link) => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`}
              onClick={handleSmoothScroll}
              className="text-white text-lg hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BankFinanceNavbar
