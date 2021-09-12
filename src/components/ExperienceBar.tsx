export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 XP</span>
            <div>
                <div style={{ width: '60%' }} />

                <span className="current-experience" style={{ left: '50%' }}> 300 XP </span>
            </div>
            <span>0 XP</span>
        </header>
    );
}