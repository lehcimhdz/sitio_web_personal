import ScrollTopButton from '@/components/ui/ScrollTopButton'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-neutral-900">
      <div className="container-custom flex items-center justify-between">
        <p className="text-xs font-mono text-neutral-600">
          © {currentYear} Michel Cano Hernández
        </p>
        <ScrollTopButton />
      </div>
    </footer>
  )
}

export default Footer
