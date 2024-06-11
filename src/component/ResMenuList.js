export default function ResMenuList(props) {
  return (
    <div>
      {props.item.map((e) => (
        <div className=" border-b-2 border-gray-400 my-2 p-6 h-40">
            <span className="font-bold text-xl p-6"> {e.card?.info?.name}</span>;
          <div>
            <span className="text-sm opacity-70"> {e.card?.info?.description}</span>;
          </div>
        </div>
      )
      )}
    </div>
  );
}
