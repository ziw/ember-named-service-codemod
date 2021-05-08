import { inject as service } from '@ember/service';

export default class HelloWorld extends Component {
  @service
  googleMaps;

  @service
  localStorage;
}
