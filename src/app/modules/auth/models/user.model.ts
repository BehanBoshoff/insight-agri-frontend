import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';

export class UserModel extends AuthModel {
  id: number;
  username?: string;
  password: string;
  fullname?: string;
  email: string;
  pic?: string;
  roles?: number[] = [];
  occupation?: string;
  companyName?: string;
  phone?: string;
  address?: AddressModel;
  socialNetworks?: SocialNetworksModel;
  firstname?: string;
  lastname?: string;

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.username = user.username || '';
    this.password = user.password || '';
    this.fullname = user.fullname || '';
    this.firstname = user.firstname || '';
    this.lastname = user.lastname || '';
    this.email = user.email || '';
    this.pic = user.pic || './assets/media/avatars/blank.png';
    this.roles = user.roles || [];
    this.occupation = user.occupation || '';
    this.companyName = user.companyName || '';
    this.phone = user.phone || '';
    this.address = user.address;
    this.socialNetworks = user.socialNetworks;
  }
}
