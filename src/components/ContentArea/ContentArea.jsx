export default function ContentArea({ children, className }) {
  return (
    <>
      <main
        className={
          className +
          " mt-16 mb-16 h-full bg-gray-400 flex flex-col items-start"
        }
      >
        {children}
      </main>
    </>
  );
}
