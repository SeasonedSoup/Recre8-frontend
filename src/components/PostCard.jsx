import "../styles/PostCard.css"

export default function PostCard({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}