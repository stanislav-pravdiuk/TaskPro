import { Card, Container, IconLink, Link, LinkBox, Name, NameBox, Position, Title, UserPhoto, UserPhotoBox } from "./TeamGallery.styled";
import icon from '../iconSvg/icon.svg'

function TeamGallery() { 
    return (
        <>
            <Title>Our Team</Title>
            <Container>
            
                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
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
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Юрій Пернаровський</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/pernarovskyi">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Ганна Кравець</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Анастасія Пастухова</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Оксана Пелехата</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Богдан Потопник</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Ірина Семенова</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Альона Ус</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Микола Ромашенко</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

                <Card>
                    <UserPhotoBox>
                        <UserPhoto src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </UserPhotoBox>
                    <NameBox>
                        <Name>Світлана Сорока</Name>
                        <Position>Developer [Backend/Frontend]</Position>
                    </NameBox>
                    <LinkBox>
                        <Link href="https://github.com/#">
                            <IconLink><use href={icon + '#icon-gitHub'}></use></IconLink>
                        </Link>
                        <Link href="https://t.me/#">
                            <IconLink><use href={icon + '#icon-telegram'}></use></IconLink>
                        </Link>
                    </LinkBox>
                </Card>

            </Container>
        </>
    );
};

export default TeamGallery