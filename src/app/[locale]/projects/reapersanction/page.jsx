import {useTranslations} from "next-intl";
import Image from "next/image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from "react-syntax-highlighter/src/styles/hljs";

export default function ReaperSanction() {
    const t = useTranslations("projects.reapersanction");

    const good_points = t.raw('good_points');
    const indev_things = t.raw('indev_things');
    const install_instructions = t.raw('wiki.install_instructions');
    const code = t.raw('wiki.code');

    const links = [
        {
            name: 'Download',
            href: 'https://github.com/Farmeurimmo/ReaperSanction/releases',
            icon: 'https://cdn.farmeurimmo.fr/img/projects/download.png',
            width: 48,
            height: 48
        },
        {
            name: 'SpigotMc',
            href: 'https://www.spigotmc.org/resources/reapersanction.89580/',
            icon: 'https://static.spigotmc.org/img/spigot.png',
            width: 48,
            height: 48
        },
        {
            name: 'Discord',
            href: 'https://discord.farmeurimmo.fr/',
            icon: 'https://cdn.farmeurimmo.fr/img/projects/icons8-discord-48.png',
            width: 48,
            height: 48
        },
        {
            name: 'Github',
            href: 'https://github.com/Farmeurimmo/ReaperSanction',
            icon: 'https://cdn.farmeurimmo.fr/img/projects/icons8-github-94.png',
            width: 48,
            height: 48
        }
    ];

    const demo_images = [
        'https://cdn.farmeurimmo.fr/img/projects/rs1.png',
        'https://cdn.farmeurimmo.fr/img/projects/rs2.png',
        'https://cdn.farmeurimmo.fr/img/projects/rs3.png',
        'https://cdn.farmeurimmo.fr/img/projects/rs4.png'
    ];

    return (
        <section id="blog" className="flex flex-col min-h-screen p-4 lg:p-8 max-w-7xl w-full justify-center mx-auto">

            <title>{t('title')}</title>
            <meta name="description" content={t('description')}/>
            <meta name="keywords"
                  content={"ReaperSanction, plugin, sanction, minecraft, spigot, paper, bungeecord, velocity"}/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:title" content={t('title')}/>
            <meta property="og:description" content={t('description')}/>
            <meta property="og:image" content="https://cdn.farmeurimmo.fr/img/projects/rs-cover.png"/>
            <meta property="og:url" content="https://farmeurimmo.fr/projects/reapersanction"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Farmeurimmo"/>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t('title')}</h1>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-8">{t('description')}</p>

            <ul className="list-disc list-inside text-xl mt-8">
                {good_points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <h2 className="text-4xl mt-8 font-bold">{t('links')}</h2>
            <div className="p-6 items-start flex flex-wrap gap-10">
                {links.map((link, index) => (
                    <a key={index} href={link.href}
                       className="p-5 container rounded-2xl transform transition duration-500 hover:scale-105 w-fit h-fit"
                       title={link.name}>
                        <Image src={link.icon} width={link.width} height={link.height}
                               className="rounded-t-2xl mt-0 p-0 h-20 w-20" alt={link.name}/>
                    </a>
                ))}
            </div>

            <h2 className="text-4xl mt-8 font-bold">{t('demo')}</h2>
            <div className="p-6 justify-center grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                {demo_images.map((image, index) => (
                    <Image key={index} src={image} width={500} height={500} className="rounded-2xl mt-0 p-0 h-fit w-fit"
                           alt={`Demo image ${index + 1}`}/>
                ))}
            </div>

            <h2 className="text-4xl mt-8 font-bold">{t('indev')}</h2>
            <ul className="text-xl list-disc list-inside">
                {indev_things.map((thing, index) => (
                    <li key={index}>{thing}</li>
                ))}
            </ul>

            <p className="mt-10 bg-gray-400 h-0.5 w-full"></p>

            <h2 className="text-6xl mt-8 font-bold">{t('wikititle')}</h2>

            <div className="flex flex-col justify-center w-full mx-auto text-left mt-4 gap-3">
                <h2 className="text-2xl font-bold tracking-tight special sm:text-3xl md:text-4xl">{t('wiki.install')}</h2>
                <div className="flex flex-col justify-center w-full mx-auto text-left gap-6">
                    <ul className="text-xl list-disc list-inside">
                        {install_instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6"></div>

                <h2 className="text-2xl font-bold tracking-tight special sm:text-3xl md:text-4xl">{t('wiki.commands')}</h2>
                <p className="text-xl">{t('wiki.optional')}</p>

                <div className="overflow-x-scroll">
                    <table className="w-full text-lg" id="table">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">{t('wiki.commands_table.row_head.command')}</th>
                            <th className="px-4 py-2">{t('wiki.commands_table.row_head.usage')}</th>
                            <th className="px-4 py-2">{t('wiki.commands_table.row_head.permission')}</th>
                            <th className="px-4 py-2">{t('wiki.commands_table.row_head.description')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border container-border px-4 py-2">/rs</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_rs.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_rs.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/ban</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_ban.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.ban</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_ban.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/tempban</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_tempban.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.tempban</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_tempban.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/unban</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_unban.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.unban</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_unban.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/kick</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_kick.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.kick</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_kick.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/mute</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_mute.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.mute</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_mute.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/tempmute</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_tempmute.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.tempmute</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_tempmute.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/unmute</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_unmute.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.unmute</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_unmute.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/ban-ip</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_banip.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.banip</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_banip.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/vanish</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_vanish.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.vanish</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_vanish.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/report</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_report.usage')}</td>
                            <td className="border container-border px-4 py-2"></td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_report.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/history</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_history.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.history</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_history.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">/rsadmin</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_rsadmin.usage')}</td>
                            <td className="border container-border px-4 py-2">reapersanction.admin</td>
                            <td className="border container-border px-4 py-2">{t('wiki.commands_table.row_rsadmin.description')}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6"></div>

                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">{t('wiki.custom_guis')}</h2>
                <p className="text-xl">{t('wiki.custom_guis_description')}</p>
                <div className="text-left text-xl">
                    <ul className="list-disc list-inside">
                        <li>Main GUI {"->"} MAIN</li>
                        <li>Mute GUI {"->"} MUTE</li>
                        <li>Ban GUI {"->"} BAN</li>
                        <li>History GUI {"->"} HISTORY</li>
                        <li>Report GUI {"->"} REPORT</li>
                        <li>End GUI {"->"} END</li>
                        <li>Ban IP GUI {"->"} BAN_IP</li>
                    </ul>
                </div>

                <div className="mt-6"></div>

                <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">{t('wiki.how_guis_works')}</h3>
                <p className="text-left text-xl">{t('wiki.how_guis_works_description')}</p>

                <div className="mt-6"></div>

                <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl">{t('wiki.location')}</h4>
                <p className="text-left text-xl">{t('wiki.location_inventories')}</p>
                <p className="text-left text-xl">{t('wiki.location_messages')}</p>

                <div className="mt-6"></div>

                <h4
                    className="text-2xl font-bold sm:text-3xl md:text-4xl">{t('wiki.gui_config')}</h4>
                <div className="overflow-x-scroll">
                    <SyntaxHighlighter language="yaml" showLineNumbers={true} style={atomOneDark} wrapLongLines={true}>
                        {code}
                    </SyntaxHighlighter>
                </div>

                <div className="mt-6"></div>

                <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl">{t('wiki.actions_title')}</h4>
                <h5 className="text-2xl font-bold">{t('wiki.ext_title')}</h5>
                <p className="text-left text-xl">{t('wiki.ext_actions_description')}</p>

                <div className="mt-6"></div>

                <h5 className="text-2xl font-bold">{t('wiki.int_title')}</h5>
                <p className="text-xl">{t('wiki.int_actions_description')}</p>
                <p className="text-xl">{t('wiki.int_actions_optional')}</p>

                <div className="mt-6"></div>

                <h5 className="text-2xl font-bold">{t('wiki.int_actions_endpoints.title')}</h5>
                <p className="text-xl">{t('wiki.int_actions_endpoints.description')}</p>
                <p className="text-left text-xl">{t('wiki.optional')}</p>

                <div className="overflow-x-scroll">
                    <table className="w-full text-lg">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">{t('wiki.int_actions_endpoints.row_head.name')}</th>
                            <th className="px-4 py-2">{t('wiki.int_actions_endpoints.row_head.arguments')}</th>
                            <th className="px-4 py-2">{t('wiki.int_actions_endpoints.row_head.description')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border container-border px-4 py-2">TEMPBAN</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_tempban.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_tempban.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">BAN</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_ban.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_ban.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">TEMPMUTE</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_tempmute.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_tempmute.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">BAN_IP</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_banip.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_banip.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">KICK</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_kick.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_kick.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">MUTE</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_mute.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_mute.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">UNMUTE</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_unmute.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_unmute.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">UNBAN</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_unban.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_unban.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">UNBAN_IP</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_unbanip.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_unbanip.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">GUI</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_gui.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_gui.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">GUI_DYN</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_gui_dyn.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_gui_dyn.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">CLOSE</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_close.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_close.description')}</td>
                        </tr>
                        <tr>
                            <td className="border container-border px-4 py-2">REPORT</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_report.arguments')}</td>
                            <td className="border container-border px-4 py-2">{t('wiki.int_actions_endpoints.row_report.description')}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}