import './sidebar.css';

export default function Sidebar() {
  return (
            <div className="sidebar">
              <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                  src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
                  alt="" 
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minima dolore deserunt sequi exercitationem! Qui 
                    necessitatibus et tempora quaerat quia. Illum nisi ipsum 
                    ipsa placeat, earum quibusdam id hic animi nobis.
                </p>
              </div>

              <div className="sidebarItem">
                  <span className="sidebarTitle">CATEGORIES</span>
                  <ul className="sidebarList">
                    <li className="sidebarListItem">STYLE</li>
                    <li className="sidebarListItem">LIFE</li>
                    <li className="sidebarListItem">MUSIC</li>
                    <li className="sidebarListItem">SPORT</li>
                    <li className="sidebarListItem">TECH</li>
                    <li className="sidebarListItem">SPRITUALITY</li>
                  </ul>
              </div>

              <div className="sidebarItem">
                    <span className="sidebarTitle">Follow Us</span>
                    <div className="sidebarSocial">
                      <i className="sidebarIcon fab fa-facebook-square"></i>
                      <i className="sidebarIcon fab fa-twitter-square"></i>
                      <i className="sidebarIcon fab fa-pinterest-square"></i>
                      <i className="sidebarIcon fab fa-instagram-square"></i>
                    </div>
              </div>
            
            </div>
  );
}
