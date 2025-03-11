import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <div className="mailbox-container">
        {mailboxes.length > 0 ? ( mailboxes.map((mailbox) => (
            <div key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
            </div>
          ))
        ) : (
          <p>No mailboxes available.</p>
        )}
      </div>
    </div>
  );
};

export default MailboxList;