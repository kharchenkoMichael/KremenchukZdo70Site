SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[ParentMenuId] [int] NULL,
	[Name] [nvarchar](Max) NULL,
	FOREIGN KEY ([ParentMenuId]) REFERENCES [Menu](Id),
	);
	
CREATE TABLE [dbo].[ElementPage](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[MenuId] [int] NOT NULL,
	[Text] [nvarchar](Max) Null,
	[ImgUrl] [nvarchar](Max) Null,
	[Href] [nvarchar](Max) Null,
	FOREIGN KEY ([MenuId]) REFERENCES [Menu](Id),
	);