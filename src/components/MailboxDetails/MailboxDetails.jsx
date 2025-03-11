import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  return selectedBox ? (
    <div>
      <h2>Mailbox {selectedBox._id}</h2>
      <p>Size: {selectedBox.boxSize}</p>
      <p>Owner: {selectedBox.boxOwner}</p>
    </div>
  ) : (
    <p>Mailbox Not Found!</p>
  );
};

export default MailboxDetails;