/**
 * Created by dinglei on 16/4/24.
 */
import { ListResource } from './resources'

export default {
  getLists:function () {
    return ListResource.get({id: '123'})
  },
}
