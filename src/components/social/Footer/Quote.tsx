interface Quote {
  text: string;
  author?: string;
  textSize: string;
}

export default function Quote({ quote }: { quote: Quote }) {
  return (
    <p className={`text-white text-center ${quote.textSize} pt-2`}>
      {quote.text}
      <small>{quote.author != undefined ? ` - ${quote.author}` : ""}</small>
    </p>
  );
}
