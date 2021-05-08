import { inject } from "@ember/service";

export default class HelloWorld extends Component {
  @inject("user-authentication")
  userAuthentication;

  @inject("github") github;
}
