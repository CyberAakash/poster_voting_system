

function AdminPage() {
  return (
    <div className="relative">
      <div className="z-10 mix-blend-multiply absolute bg-[url(/gridsm.jpg)] bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))] inset-0"></div>
      <img
        src="/beams.jpg"
        className="z-8 w-full h-full absolute max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      ></img>
    </div>
  );
}

export default AdminPage