export default function ImageBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <img
        src="/EHRandPMS/Stone.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
