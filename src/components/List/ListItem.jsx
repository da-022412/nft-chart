

const ListItem = ({ content }) => {
  return (
    <>
      <a href={`https://objkt.com/explore/tokens/1?gallery=fxhash:${content.slug}`}>{content.name}</a><br></br>
    </>
   );
}
 
export default ListItem;