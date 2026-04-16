import './Sidebar.css';
import { LayoutDashboard, Gamepad2, User } from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab }) {
    return (
        <aside className="vortex-sidebar">
            <h2 className="logo">VORTEX</h2>

            <nav>
                <div 
                    className={`nav-item ${activeTab === 'dash' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('dash')}
                > 
                    <LayoutDashboard size={20} />
                    Dashboard
                </div>

                <div 
                    className={`nav-item ${activeTab === 'jogos' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('jogos')}
                > 
                    <Gamepad2 size={20} />
                    Meus Jogos
                </div>

                <div 
                    className={`nav-item ${activeTab === 'perfil' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('perfil')}
                > 
                    <User size={20} />
                    Perfil
                </div>
            </nav>
        </aside>
    );
}