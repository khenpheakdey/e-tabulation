import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faAddressCard,
  faBoxArchive,
  faCalendarDays,
  faObjectGroup,
  faHouse,
  faStar,
  faUsers,
  faUserGroup,
  faNoteSticky,
  faList,
  faFileExcel,
  faPaperclip,
  faPlus,
  faMessage,
  faPerson,
  faUser,
  faGenderless,
  faEnvelope,
  faMale,
  faFemale,
  faMars,
  faVenus,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faAddressCard,
  faBoxArchive,
  faCalendarDays,
  faObjectGroup,
  faHouse,
  faStar,
  faUsers,
  faUserGroup,
  faNoteSticky,
  faList,
  faFileExcel,
  faPaperclip,
  faPlus,
  faMessage,
  faPerson,
  faUser,
  faMars,
  faVenus,
  faEnvelope,
  faSignOut
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
