export default function Footer() {
    return (
<>
  <div className="bg-gray-100 py-10 mt-10 px-6">

    {/* Footer Content */}
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pb-10">

      {/* Logo */}
      <div>
        <img
          className="w-36"
          src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
          alt="Swiggy Logo"
        />
        <p className="mt-2 text-sm">© 2025 Swiggy Limited</p>
      </div>

      {/* Company */}
      <div className="space-y-3">
        <p className="text-lg font-bold">Company</p>

        <div className="space-y-2 text-sm">
          {[
            ["About Us", "https://careers.swiggy.com/#/"],
            ["Swiggy Corporate", "https://www.swiggy.com/corporate/"],
            ["Careers", "https://careers.swiggy.com/#/"],
            ["Team", "https://careers.swiggy.com/#/"],
            ["Swiggy One", "https://www.swiggy.com/swiggy-super"],
            ["Swiggy Instamart", "https://www.swiggy.com/instamart"],
            ["Swiggy Dineout", "https://www.swiggy.com/dineout"],
            ["Minis", "https://mini.store/"],
            ["Pyng", "https://pyng.co.in/"]
          ].map(([text, href]) => (
            <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-orange-600">
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Contact + Legal */}
      <div className="space-y-6">

        <div className="space-y-3">
          <p className="text-lg font-bold">Contact us</p>

          <div className="space-y-2 text-sm">
            {[
              ["Help & Support", "https://www.swiggy.com/support"],
              ["Partner with us", "https://partner.swiggy.com/login#/swiggy"],
              ["Ride with us", "http://ride.swiggy.com/"]
            ].map(([text, href]) => (
              <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-orange-600">
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-bold">Legal</p>

          <div className="space-y-2 text-sm">
            {[
              ["Terms & Conditions", "https://www.swiggy.com/terms-and-conditions"],
              ["Cookie Policy", "https://www.swiggy.com/cookie-policy"],
              ["Privacy Policy", "https://www.swiggy.com/privacy-policy"]
            ].map(([text, href]) => (
              <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-orange-600">
                {text}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Cities */}
      <div className="space-y-3">
        <p className="text-lg font-bold">Available in</p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            ["Bangalore", "https://www.swiggy.com/city/bangalore"],
            ["Gurgaon", "https://www.swiggy.com/city/gurgaon"],
            ["Hyderabad", "https://www.swiggy.com/city/hyderabad"],
            ["Delhi", "https://www.swiggy.com/city/delhi"],
            ["Mumbai", "https://www.swiggy.com/city/mumbai"],
            ["Pune", "https://www.swiggy.com/city/pune"]
          ].map(([text, href]) => (
            <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="space-y-6">

        <div className="space-y-3">
          <p className="text-lg font-bold">Life at Swiggy</p>

          <div className="space-y-2 text-sm">
            {[
              ["Explore with Swiggy", "https://blog.swiggy.com/"],
              ["Swiggy News", "https://blog.swiggy.com/category/swiggy-restaurant-awards/"],
              ["Snackables", "https://blog.swiggy.com/category/snackables/campaigns/"]
            ].map(([text, href]) => (
              <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-orange-600">
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-bold">Social Links</p>

          <div className="flex gap-4">
            {[
              ["LinkedIn", "https://www.linkedin.com/company/swiggy-in/", "https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"],
              ["Instagram", "https://www.instagram.com/swiggyindia/?hl=en", "https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"],
              ["Facebook", "https://www.facebook.com/swiggy.in/", "https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"],
              ["Pinterest", "https://in.pinterest.com/swiggyindia/", "https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"],
              ["Twitter", "https://x.com/Swiggy", "https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"]
            ].map(([alt, href, src]) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5 hover:opacity-80" src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>

      </div>

    </div>

    <hr className="border-gray-300 max-w-6xl mx-auto my-6" />

    {/* App Download */}
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

      <p className="text-xl font-bold text-gray-700 text-center lg:text-left">
        For better experience, download the Swiggy app now
      </p>

      <div className="flex gap-4">

        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <img
            className="w-44 hover:scale-95 transition"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="App Store"
          />
        </a>

        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img
            className="w-44 hover:scale-95 transition"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="Google Play"
          />
        </a>

      </div>

    </div>

  </div>
</>
    )
}