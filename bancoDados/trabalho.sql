CREATE DATABASE if not exists newTrabalhoInterdisciplinar;

use newTrabalhoInterdisciplinar;

CREATE TABLE Corridas (
    id_corrida INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30),
    data_corrida DATE,
    local_corrida VARCHAR(30),
    distancia VARCHAR(30),
    limite_participantes INT,
    preco INT,
    CONSTRAINT id_corrida_pk PRIMARY KEY (id_corrida)
) ENGINE=InnoDB;


CREATE TABLE Atletas (
    id_atleta INT NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(11),
    nome VARCHAR(30),
    idade INT,
    CONSTRAINT id_atleta_pk PRIMARY KEY (id_atleta)
) ENGINE=InnoDB;


CREATE TABLE Maratonas (
    id_maratona INT NOT NULL AUTO_INCREMENT,
    id_corridafk INT NOT NULL,
    conjunto_corredores VARCHAR(30),

    CONSTRAINT id_maratona_pk PRIMARY KEY (id_maratona),
    CONSTRAINT maratona_corrida_fk FOREIGN KEY (id_corridafk)
        REFERENCES Corridas(id_corrida)
) ENGINE=InnoDB;


CREATE TABLE CorridaTrilhas (
    id_trilha INT NOT NULL AUTO_INCREMENT,
    id_corridafk INT NOT NULL,
    qtd_checkpoint INT,
    grau_dificuldade VARCHAR(30),
	CONSTRAINT id_trilha_pk PRIMARY KEY (id_trilha),
	CONSTRAINT trilha_corrida_fk FOREIGN KEY (id_corridafk)
		REFERENCES Corridas(id_corrida)
) ENGINE=InnoDB;


CREATE TABLE Competidores (
    id_competidor INT NOT NULL AUTO_INCREMENT,
    id_atletafk INT NOT NULL,
    id_corridafk INT NOT NULL,
	CONSTRAINT id_competidor_pk PRIMARY KEY (id_competidor),
	CONSTRAINT competidor_atleta_fk FOREIGN KEY (id_atletafk)
		REFERENCES Atletas(id_atleta),
	CONSTRAINT competidor_corrida_fk FOREIGN KEY (id_corridafk)
		REFERENCES Corridas(id_corrida)
) ENGINE=InnoDB;


CREATE TABLE Classificacoes (
    id_classificacao INT NOT NULL AUTO_INCREMENT,
    id_competidorfk INT NOT NULL,
    posicao INT,
    tempo VARCHAR(4),
	CONSTRAINT id_classificacao_pk PRIMARY KEY (id_classificacao),
	CONSTRAINT classificacao_competidor_fk FOREIGN KEY (id_competidorfk)
		REFERENCES Competidores(id_competidor)
) ENGINE=InnoDB;


INSERT INTO Corridas (nome, data_corrida, local_corrida, distancia, limite_participantes, preco) VALUES
('Corrida 1','2025-01-01','Cidade A','5km',100,50),
('Corrida 2','2025-01-02','Cidade B','10km',150,60),
('Corrida 3','2025-01-03','Cidade C','15km',200,70),
('Corrida 4','2025-01-04','Cidade D','5km',80,40),
('Corrida 5','2025-01-05','Cidade E','7km',120,45),
('Corrida 6','2025-01-06','Cidade F','21km',300,100),
('Corrida 7','2025-01-07','Cidade G','10km',150,55),
('Corrida 8','2025-01-08','Cidade H','12km',180,70),
('Corrida 9','2025-01-09','Cidade I','5km',110,30),
('Corrida 10','2025-01-10','Cidade J','8km',140,50),
('Corrida 11','2025-01-11','Cidade K','10km',160,60),
('Corrida 12','2025-01-12','Cidade L','21km',250,90),
('Corrida 13','2025-01-13','Cidade M','15km',200,80),
('Corrida 14','2025-01-14','Cidade N','5km',100,20),
('Corrida 15','2025-01-15','Cidade O','7km',130,40),
('Corrida 16','2025-01-16','Cidade P','10km',150,50),
('Corrida 17','2025-01-17','Cidade Q','12km',180,60),
('Corrida 18','2025-01-18','Cidade R','21km',300,120),
('Corrida 19','2025-01-19','Cidade S','5km',90,25),
('Corrida 20','2025-01-20','Cidade T','8km',140,50),
('Corrida 21','2025-01-21','Cidade U','10km',150,60),
('Corrida 22','2025-01-22','Cidade V','15km',220,75),
('Corrida 23','2025-01-23','Cidade W','12km',180,55),
('Corrida 24','2025-01-24','Cidade X','7km',130,35),
('Corrida 25','2025-01-25','Cidade Y','5km',100,20),
('Corrida 26','2025-01-26','Cidade Z','10km',150,60),
('Corrida 27','2025-01-27','Cidade A1','21km',320,110),
('Corrida 28','2025-01-28','Cidade B1','15km',200,70),
('Corrida 29','2025-01-29','Cidade C1','8km',150,40),
('Corrida 30','2025-01-30','Cidade D1','5km',100,20);


INSERT INTO Atletas (cpf, nome, idade) VALUES
('11111111111','Atleta 1',20),
('22222222222','Atleta 2',21),
('33333333333','Atleta 3',22),
('44444444444','Atleta 4',23),
('55555555555','Atleta 5',24),
('66666666666','Atleta 6',25),
('77777777777','Atleta 7',26),
('88888888888','Atleta 8',27),
('99999999999','Atleta 9',28),
('10101010101','Atleta 10',29),
('12121212121','Atleta 11',30),
('13131313131','Atleta 12',31),
('14141414141','Atleta 13',32),
('15151515151','Atleta 14',33),
('16161616161','Atleta 15',34),
('17171717171','Atleta 16',35),
('18181818181','Atleta 17',36),
('19191919191','Atleta 18',37),
('20202020202','Atleta 19',38),
('21212121212','Atleta 20',39),
('22222222223','Atleta 21',40),
('23232323232','Atleta 22',41),
('24242424242','Atleta 23',42),
('25252525252','Atleta 24',43),
('26262626262','Atleta 25',44),
('27272727272','Atleta 26',45),
('28282828282','Atleta 27',46),
('29292929292','Atleta 28',47),
('30303030303','Atleta 29',48),
('31313131313','Atleta 30',49);

INSERT INTO Competidores (id_atletafk, id_corridafk) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),
(6,6),(7,7),(8,8),(9,9),(10,10),
(11,11),(12,12),(13,13),(14,14),(15,15),
(16,16),(17,17),(18,18),(19,19),(20,20),
(21,21),(22,22),(23,23),(24,24),(25,25),
(26,26),(27,27),(28,28),(29,29),(30,30);

INSERT INTO Classificacoes (id_competidorfk, posicao, tempo) VALUES
(1,1,'2000'),(2,2,'2010'),(3,3,'2020'),
(4,4,'2030'),(5,5,'2040'),
(6,6,'2050'),(7,7,'2100'),(8,8,'2110'),
(9,9,'2120'),(10,10,'2130'),
(11,11,'2140'),(12,12,'2150'),(13,13,'2200'),
(14,14,'2210'),(15,15,'2220'),
(16,16,'2230'),(17,17,'2240'),(18,18,'2250'),
(19,19,'2300'),(20,20,'2310'),
(21,21,'2320'),(22,22,'2330'),(23,23,'2340'),
(24,24,'2350'),(25,25,'2400'),
(26,26,'2410'),(27,27,'2420'),(28,28,'2430'),
(29,29,'2440'),(30,30,'2450');


INSERT INTO Maratonas (id_corridafk, conjunto_corredores) VALUES
(1,'Grupo 1'),(2,'Grupo 2'),(3,'Grupo 3'),(4,'Grupo 4'),(5,'Grupo 5'),
(6,'Grupo 6'),(7,'Grupo 7'),(8,'Grupo 8'),(9,'Grupo 9'),(10,'Grupo 10'),
(11,'Grupo 11'),(12,'Grupo 12'),(13,'Grupo 13'),(14,'Grupo 14'),(15,'Grupo 15'),
(16,'Grupo 16'),(17,'Grupo 17'),(18,'Grupo 18'),(19,'Grupo 19'),(20,'Grupo 20'),
(21,'Grupo 21'),(22,'Grupo 22'),(23,'Grupo 23'),(24,'Grupo 24'),(25,'Grupo 25'),
(26,'Grupo 26'),(27,'Grupo 27'),(28,'Grupo 28'),(29,'Grupo 29'),(30,'Grupo 30');


INSERT INTO CorridaTrilhas (id_corridafk, qtd_checkpoint, grau_dificuldade) VALUES
(1,5,'Fácil'),(2,4,'Médio'),(3,6,'Difícil'),(4,3,'Fácil'),(5,5,'Médio'),
(6,8,'Difícil'),(7,2,'Fácil'),(8,4,'Médio'),(9,6,'Difícil'),(10,3,'Fácil'),
(11,5,'Médio'),(12,7,'Difícil'),(13,4,'Fácil'),(14,6,'Médio'),(15,8,'Difícil'),
(16,3,'Fácil'),(17,4,'Médio'),(18,5,'Difícil'),(19,'6','Fácil'),(20,4,'Médio'),
(21,7,'Difícil'),(22,5,'Fácil'),(23,4,'Médio'),(24,6,'Difícil'),(25,3,'Fácil'),
(26,5,'Médio'),(27,8,'Difícil'),(28,4,'Fácil'),(29,6,'Médio'),(30,7,'Difícil');

SELECT * FROM corridas;
SELECT * FROM atletas;