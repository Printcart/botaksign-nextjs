import MenuItemContact from './MenuItemContact';
import MenuTitle from './MenuTitle';

const MenuContact = (props) => {
  const { title, contacts } = props;
  return (
    <>
      <MenuTitle title={title} />
      {contacts?.length > 0 &&
        contacts.map((contact, index) => (
          <MenuItemContact
            key={`MenuContact-${index}`}
            subContacts={contact.subMenuItems}
            icon={contact.icon}
          />
        ))}
    </>
  );
};

export default MenuContact;
