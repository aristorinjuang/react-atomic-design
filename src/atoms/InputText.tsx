export default function InputText(props: any) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="px-8 py-2 rounded-lg border-2 border-cyan-400 focus:border-cyan-700 w-full"
    />
  )
}