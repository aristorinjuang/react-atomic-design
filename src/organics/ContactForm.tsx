import FieldSubmit from "../moleculs/FieldSubmit";
import FieldEmail from "../moleculs/FieldEmail";
import FieldText from "../moleculs/FieldText";
import FieldTextarea from "../moleculs/FieldTextarea";

export default function ContactForm() {
  return (
    <form method="post" className="max-w-md mx-auto">
      <FieldText placeholder="Name..." />
      <FieldEmail />
      <FieldTextarea />
      <FieldSubmit />
    </form>
  )
}