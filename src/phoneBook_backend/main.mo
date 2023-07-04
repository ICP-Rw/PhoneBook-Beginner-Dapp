import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";

actor {

type Contact = {
name : Text;
desc: Text;
phone: Text;
};

  let phonebook = Buffer.Buffer<Contact>(0);
  public func insert(_name : Text, _desc : Text, _phone : Text): async () {

    phonebook.add({
    name=_name;
    desc=_desc;
    phone=_phone;
    });
  };

  public query func getAllContacts() : async [Contact]{
  return Buffer.toArray<Contact>(phonebook);
  };

};

