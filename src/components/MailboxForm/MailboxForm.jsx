import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBox = {
      boxSize: formData.get("boxSize"),
      boxOwner: formData.get("boxOwner"),
    };
    addBox(newBox);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Owner: <input name="boxOwner" required /></label>
      <label>Box Size: 
        <select name="boxSize" required>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;