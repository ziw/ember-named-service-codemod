import { inject } from "@ember/service";

export default class HelloWorld extends Component {
  @inject
  userAuthentication;

  @inject github;
}
