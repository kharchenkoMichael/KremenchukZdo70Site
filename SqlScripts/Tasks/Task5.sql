SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](Max) NULL,
	[PasswordHash] [nvarchar](Max) NULL,
	);