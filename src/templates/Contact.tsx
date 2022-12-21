import Title from "../atoms/Title";
import ContactForm from "../organics/ContactForm";

export default function Contact(props: any) {
  return (
    <section className="max-w-lg mx-auto">
      <Title content={props.title} />
      {props.content}
      <ContactForm />
    </section>
  )
}