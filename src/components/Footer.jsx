export default function Footer() {
  const footerStyles = {
    backgroundColor: "#CDD6BB",
    color: "#003231",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "auto",
  };
  return (
    <footer
      id="sticky-footer"
      className="footer text-white text-center flex-shrink-0 py-4"
      style={footerStyles}
    >
      <div className="text-dark">
        <p>
          Copyright &copy; {new Date().getFullYear()} Mohammed Uddin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
