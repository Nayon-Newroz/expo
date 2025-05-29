export default function Footer() {
  return (
    <footer className='py-8 border-t border-gray-200 mx-auto px-4'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} Eduexpo. All rights reserved.</p>
      </div>
    </footer>
  );
}
