import { Card, Container, IconLink, Link, LinkBox, Name, NameBox, Position, UserPhoto, UserPhotoBox } from "./TeamGallery.styled";
import icon from '../iconSvg/icon.svg';
import Pravdiuk from '../../images/developers/StanislavPravdiuk.jpg';
import Kravets from '../../images/developers/KravetsHanna.jpg';
import Pastukhova from '../../images/developers/AnastasiiaPastukhova.jpg';
import Potopnyk from "../../images/developers/BohdanPotopnyk.jpg";
import Pelekhata from '../../images/developers/OksanaPelekhata.jpg';
import Soroka from '../../images/developers/SvitlanaSoroka.jpg';
import Romashenko from '../../images/developers/MykolaRomashenko.jpg';
import Pernarovskyi from '../../images/developers/YuriiPernarovskyi.jpg';
import Semenova from '../../images/developers/IrynaSemenova.jpg';
import Us from '../../images/developers/ElenaUs.jpg';

function TeamGallery() { 
    return (
            <Container>
            
                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Pravdiuk} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Stanislav Pravdiuk</Name>
                        <Position>Team Lead [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/stanislav-pravdiuk">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/Pravdiuk_Stanislav">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Ігор Карен</Name>
                        <Position>Team Lead [Backend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/IhorKaren">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Pernarovskyi} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Yurii Pernarovskyi</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/pernarovskyi">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/jpernarovskyi">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Kravets} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Kravets Hanna</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/An-nettt">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/An_nettttt">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Pastukhova} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Anastasiia Pastukhova</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/NastiaPast">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/nastia_past">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Pelekhata} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Oksana Pelekhata</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/Oksana-Pelekhata">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/OksanaPelekhata">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Potopnyk} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Bohdan Potopnyk</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/Potopnyk">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/Darekas97">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Semenova} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Iryna Semenova</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/IrinaSemenovaa">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/iriskaasemenova">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Us} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Elena Us</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/ELENA88555">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/Us_Olena">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Romashenko} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Mykola Romashenko</Name>
                        <Position>Developer [Backend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/Thonatosss">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/romashenkomm">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src={Soroka} alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Svitlana Soroka</Name>
                        <Position>Developer [Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/SorokaSvitlana">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/SORO_light">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

            </Container>
    );
};

export default TeamGallery