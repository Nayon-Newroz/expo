export default function Footer() {
  return (
    <footer className='py-8 border-t border-gray-200'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {new Date().getFullYear()} ExpoEvent. All rights reserved.</p>
      </div>
    </footer>
  );
}
