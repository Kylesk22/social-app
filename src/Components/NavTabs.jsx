import React from "react";

const NavTabs = () => {
    return(
    <div classNameNameName="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#home"><span><i class="fa-solid fa-grip"></i></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#profile"><span><i class="fa-solid fa-square"></i></span></a>
            </li>
          </ul>
            <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active show" id="home">.ajdgapsejovasenovmas </div>
                <div class="tab-pane fade" id="profile">asjbieanjfml;kadsm,f</div>
            </div>
    </div>)
}

export default NavTabs