import FieldSubmit from "../molecules/FieldSubmit";
import FieldEmail from "../molecules/FieldEmail";
import FieldText from "../molecules/FieldText";
import FieldTextarea from "../molecules/FieldTextarea";

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