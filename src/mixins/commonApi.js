import wepy from 'wepy'
import {baseUrl} from '../config' 

export default class CommonApi extends wepy.mixin {
  data = {
  }
  methods = {
    share () {
      console.log(1111)
    }
  }

  onShow() {
  }

  onLoad() {
    console.log('mixins')
  }
}
