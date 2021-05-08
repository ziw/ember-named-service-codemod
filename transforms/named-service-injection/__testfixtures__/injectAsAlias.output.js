import { inject as service } from '@ember/service';

export default class HelloWorld extends Component {
  @service('google-maps')
  googleMaps;

  @service('local-storage')
  localStorage;
}
