function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>© {year} Zucode Tech Hub. All rights reserved.</p>
        </footer>
    );
}

export default Footer;