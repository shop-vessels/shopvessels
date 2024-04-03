import dynamic from "next/dynamic";

const QuillBotEditor = dynamic(() => {
  return import("./Editor").then((mod) => mod.default);
}, {
  ssr: false,
  loading: () => <p>Loading QuillBotEditor...</p>,
});

// Now, you can pass props to the QuillBotEditor component
const QuillBotEditorWithProps = (props) => {
  return <QuillBotEditor {...props} />;
};

export default QuillBotEditorWithProps;