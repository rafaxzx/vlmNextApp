export default function ContentArea({ children, className }) {
  return (
    <>
      <main className={className + "bg-gray-400 flex flex-col"}>
        {children}
      </main>
    </>
  );
}
