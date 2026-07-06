export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50">
      <div className="container-page flex h-16 items-center justify-center text-center text-sm text-neutral-600">
        <p>&copy; {new Date().getFullYear()} NCT Fanbase. All rights reserved.</p>
      </div>
    </footer>
  );
}
