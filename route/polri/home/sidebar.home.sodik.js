export function sidebar_home() {
  function _sdk_pages() {
    return `
    <div id="navbarLeftMenu" class="ly cpt cqa crh cuo cwj cyt">
      <div id="navbarLeftMenuContent" class="dark:bg-gray-900 ls uo ym aao ade aff afp alj arf">
        <div id="navbarLeft" class="collapse-mobile ls ng um yu cursor-pointer" data-collapse-toggle="navbarLeftMenu">
          <img
            class="ob th"
            src="${part_files_icon + page_icon}"
            alt="${page_title_police}"
          />
          <span class="t">Text Icon</span>
          <span class="dark:text-gray-400 text-xl px-4 mt-2 font-bold">${page_title_police}</span>
        </div>
        <div class="collapse-desktop ls ng um yu">
          <img
            class="ob th"
            src="${part_files_icon + page_icon}"
            alt="${page_title_police}<"
          />
          <span class="t">Text Icon</span>
          <span class="dark:text-gray-400 text-xl px-4 mt-2 font-bold">${page_title_police}</span>
        </div>
        <nav class="ls uh ym">
          <ul role="list" class="ls uh ym aaq">
            <li>
              <ul role="list" class="fv abj">
                <li data-aos="slide-right">
                  <a href="#" class="ail ayc bpw ls aaa adp aql avv awk awb"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="ayc nx rz um"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      ></path></svg>Dashboard</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <div class="avx awb awk axk">Teams Project Build</div>
              <ul role="list" class="fv kw abj">
                <li data-aos="slide-right">
                  <a href="#" id="defaultModals" class="axo blb bic bpw ls aaa adp aql avv awk awb" data-modal-toggle="defaultModalsMenu" data-modal-load="99"
                    ><span
                      class="axk afp bpz bri ls nx rz um yu yz ado aeu avr avz alj"
                      >TAS</span
                    ><span class="adg">Tubagus Ahmad Sodik</span></a
                  >
                </li>
                <li data-aos="slide-right">
                  <a href="#" id="defaultModals" class="axo blb bic bpw ls aaa adp aql avv awk awb" data-modal-toggle="defaultModalsMenu" data-modal-load="98"
                    ><span
                      class="axk afp bpz bri ls nx rz um yu yz ado aeu avr avz alj"
                      >PS</span
                    ><span class="adg">Project Sodik</span></a
                  >
                </li>
              </ul>
            </li>
            <li class="fz lk">
              <a href="#" class="ls yu aab arf aru avv awb awk axq"
                ><img
                  id="session_user_images"
                  class="session_user_images ob se adn ail dark:bg-gray-900"
                  src="${part_files_icon + page_icon}"
                  alt="[_IMAGES_]"
                /><span class="t">Your profile</span
                ><span id="session_user_name" class="session_user_name dark:text-gray-400" aria-hidden="true">[_username_]</span></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
      `;
  }
  return _sdk_pages();
}
